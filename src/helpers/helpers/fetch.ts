export function customFetch({
  method,
  url,
  body,
}: {
  method: string;
  url: string;
  body?: BodyInit;
}) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
    method,
    ...(body && { body }),
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  });
}
