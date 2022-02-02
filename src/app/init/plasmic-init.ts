import { initPlasmicLoader } from "@plasmicapp/loader-angular";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "bcnDpbEVnBhpdY8prs3BPC",  // ID of a project you are using
      token: "b1rNAD8RabBLvzPxQ1clxugntZa5aAZnKxNinQGjmKBxCtdQyIo1GI8yuhFKxtkosRaGyubKbimJUEWqV7BIg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
