import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        // {
        //     name: "slug",
        //     type: "slug",
        //     title: "slug",
        //     options:{
        //         source: "title",
        //     }
        // },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'object',
            fields: [
              {
                name: 'rate',
                title: 'Rate',
                type: 'number',
                validation: Rule => Rule.min(0).max(5),
              }
    ]}
    ]
})