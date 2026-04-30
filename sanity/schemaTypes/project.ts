import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Selected Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: 'Labels shown on the image (e.g. "Photography", "Branding")',
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls position on the page (1 = first)",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
