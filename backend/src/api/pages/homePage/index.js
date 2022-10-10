//Strapi
import { homepage } from "../../../services/strapi/Homepage";
import { componentQueries } from "../../components/componentQueries";

export const homePage = async (_, { country }) => {
  const homePage = await homepage();
  const result = homePage.map(async (component) => {
    const [name] = Object.keys(component);
    return await componentQueries[name](_, { id: component[name].data?.id, country });
  });

  return {
    components: await Promise.all(result),
  };
};
