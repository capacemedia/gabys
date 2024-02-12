const auth = Buffer.from(
  process.env.CMS_GRAPHQL_AUTH_USER + ":" + process.env.CMS_GRAPHQL_AUTH_PASS
).toString("base64");

export const WPnext = async (query: string, variables?: any) => {
  try {
    const response = await fetch(`${process.env.CMS_GRAPHQL_URI}`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 345600 },
      body: JSON.stringify({
        query,
        variables: variables || null,
      }),
    });

    if (response.status === 500) {
      throw response.statusText;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ERROR WP ====>", error);
    return;
  }
};
