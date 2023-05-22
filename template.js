export const template = {
  name: "Template Name",
  size: "A4",
  landscape: true,
  pages: [
    {
      name: "Page 1",
      classNames: "bg-blue-500 p-10 m-10",
      watermark: {
        show: true,
        type: "TEXT",
        text: "CONFIDENTIAL",
        image: "/image/img.jpg",
        classNames: "bg-blue-500 p-10 m-10",
      },
      header: {
        type: "A",
        show: true,
        props: {
          showTitle: true,
          showAppTitle: true,
          showLogo: true,
          logoVariant: "regular",
          logoDensity: "high",
          appTitle: "Corporate Business Unit",
          classNames: {
            title: "bg-blue-500 p-10 m-10",
            appTitle: "bg-blue-500 p-10 m-10",
          },
        },
        classNames: "bg-blue-500 p-10 m-10 items-center",
        inputs: [
          {
            field: "title",
            defaultValue: "Invoice",
            type: "text",
            classNames: "text-color-blue-900",
          },
          {
            field: "showTitle",
            defaultValue: true,
            type: "toggle",
          },
          {
            field: "appTitle",
            defaultValue: true,
            type: "text",
            classNames: "text-color-blue-900",
          },
          {
            field: "showAppTitle",
            defaultValue: true,
            type: "toggle",
          },
          {
            field: "showLogo",
            defaultValue: true,
            type: "toggle",
          },
          {
            field: "logoVariant",
            defaultValue: "regular",
            type: "radio",
            options: ["regular", "compact", "big"],
          },
        ],
      },
      content: {
        type: "ROW",
        rows: [
          {
            classNames: "p-10 m-5",
            columns: [
              {
                classNames: "p-10 bg-gray-100",
                content: {
                  type: "WIDGET",
                  widgetId: "activity-chart",
                },
              },
              {
                classNames: "p-10 bg-gray-100",
                content: {
                  type: "WIDGET",
                  widgetId: "activity-bar-chart",
                },
              },
            ],
          },
        ],
      },
      footer: {
        type: "A",
        show: true,
        props: {
          showTitle: true,
          showAppTitle: true,
          showLogo: true,
          logoVariant: "regular",
          logoDensity: "high",
          appTitle: "Corporate Business Unit",
          classNames: {
            title: "bg-blue-500 p-10 m-10",
            appTitle: "bg-blue-500 p-10 m-10",
          },
        },
        classNames: "bg-blue-500 p-10 m-10 items-center",
        inputs: [
          {
            field: "title",
            defaultValue: "Invoice",
            type: "text",
            classNames: "text-color-blue-900",
          },
          {
            field: "showTitle",
            defaultValue: true,
            type: "toggle",
          },
          {
            field: "appTitle",
            defaultValue: true,
            type: "text",
            classNames: "text-color-blue-900",
          },
          {
            field: "showAppTitle",
            defaultValue: true,
            type: "toggle",
          },
          {
            field: "showLogo",
            defaultValue: true,
            type: "toggle",
          },
          {
            field: "logoVariant",
            defaultValue: "regular",
            type: "radio",
            options: ["regular", "compact", "big"],
          },
        ],
      },
    },
  ],
};
