export const makeApiCall = async (
  url: string,
  options: RequestInit = {},
  timeout: number = 5000
): Promise<Response> => {
  const controller = new AbortController();
  const signal = controller.signal;

  // Set a timeout to abort the fetch request
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const responsePromise = await fetch(url, { ...options, signal });
    if (!responsePromise.ok) {
      throw new Error(`HTTP error! status: ${responsePromise.status}`);
    }
    return responsePromise;
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      throw new Error('Fetch request timed out');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};
