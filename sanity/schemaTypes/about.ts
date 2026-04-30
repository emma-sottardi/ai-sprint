import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "bio",
      title: "Bio Text",
      type: "text",
      rows: 6,
      description: "The paragraph shown in the About section",
    }),
    defineField({
      name: "photo",
      title: "Portrait Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "About" };
    },
  },
});
