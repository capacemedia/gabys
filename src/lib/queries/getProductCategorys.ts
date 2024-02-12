import { WPnext } from "../wp";

export const getProductCategories = async (id: string) => {
  try {
    const res = await WPnext(
      `
    query NewQuery($id: ID!) {
      productCategory(id: $id, idType: URI) {
        slug
        name
        id
        children(where: {parent: 0}) {
          nodes {
            name
            id
            slug
            children {
              nodes {
                name
                id
                slug
              }
            }
          }
        }
      }
    }
    `,
      { id }
    );

    const data = res?.data?.productCategory;
    if (!data) {
      throw new Error("Couldn't find product category");
    }
    return data;
  } catch (error) {
    console.error("error =====>", error);
    return null;
  }
};

export const getAllCategories = async () => {
  try {
    const res = await WPnext(`query getAllCategories {
      productCategories(where: {parent: 0}, first: 50) {
        nodes {
          name
          slug
          id
          children(where: {parent: 0}, first: 20) {
            nodes {
              name
              slug
              id
              children(first: 20) {
                nodes {
                  name
                  slug
                  id
                }
              }
            }
          }
        }
      }
    }`);
    const data = res?.data?.productCategories;
    if (!data) {
      throw new Error("Couldn't find product category");
    }
    return data;
  } catch (error) {
    console.error("error =====>", error);
    return null;
  }
};
