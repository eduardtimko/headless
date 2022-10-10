//Strapi
import { homepage } from "../../services/strapi/Homepage";
import { queries } from "../queries";

export const homePage = async (_, { country }) => {
  const homePage = await homepage();
  const result = homePage.map(async (component) => {
    const [name] = Object.keys(component);
    return await queries[name](_, { id: component[name].data?.id, country });
  });

  return {
    components: await Promise.all(result),
  };
};
