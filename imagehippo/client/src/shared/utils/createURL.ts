export const createURL = (pathname: string) => {
  const base = window.location.protocol.concat(
    '//',
    window.location.hostname,
    ':',
    window.location.port,
    pathname,
  );
  const url = new URL(base);
  if (url.port === '5173') {
    url.port = '3001';
  }
  return url;
};
export default createURL;
