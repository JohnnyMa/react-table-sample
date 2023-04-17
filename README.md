# Tiny table component sample based on React and TypeScript.

[![Deploy to GH Pages](https://github.com/JohnnyMa/react-table-sample/actions/workflows/main.yml/badge.svg)](https://github.com/JohnnyMa/react-table-sample/actions/workflows/main.yml)

There're limited features in this table component for now. 🌱
1. Fixed the table header and can specify to sort by the value of a column in positive or reverse order (front-end sorting is enough).

2. Support specifying left n columns or right n columns to be fixed when scrolling horizontally.

3. Support pagination and specify the page size.

BTW, this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Live Sample & API 🚀

https://johnnyma.github.io/react-table-sample/

## How to use

```
  const users = [
    {
      id: 1,
      name: "Evelyn Zamora",
      phone: "0888 309 7758",
      email: "enim.a@google.edu",
      address: "935-3691 Facilisis, Ave",
      postalZip: "1844",
      region: "Poitou-Charentes",
      country: "United Kingdom",
      color: "Gray",
    },
    ...
  ];

  const columns: TableColumn[] = [
    { name: "ID", key: "id", sortable: true, width: 40 },
    { name: "Name", key: "name", sortable: true, width: 100 },
    { name: "Phone", key: "phone", sortable: false, width: 100 },
    { name: "Email", key: "email", sortable: true, width: 180 },
    { name: "Address", key: "address", sortable: false, width: 150 },
    { name: "PostalZip", key: "postalZip", sortable: false, width: 80 },
    { name: "Region", key: "region", sortable: true, width: 80 },
    { name: "Country", key: "country", sortable: true, width: 80 },
    { name: "Color", key: "color", sortable: true, width: 60 },
  ];
  
  // use Table component
  <Table
    data={users}
    columns={columns}
    defaultPageSize={10}
    fixedLeftColumns={2}
    fixedRightColumns={1}
  />
```


## API
### Table API

| Property                                                                    | Description                                        | Type     | Default |
| --------------------------------------------------------------------------- | -------------------------------------------------- | -------- | ------- |
| data                                                                        | Data record array to be displayed                  | object[] | -       |
| columns Columns of table. You could find more details in `TableColumn API`. | TableColumn[]                                      | -        |
| defaultPageSize                                                             | Default pagination size. E.g. 10 records per page  | number   | 10      |
| fixedLeftColumns                                                            | Set the fixed columns start from the first column. | number   | 0       |
| fixedRightColumns                                                           | Set the fixed columns start from the last column.  | number   | 0       |

### TableColumn API

| Property | Description                                                                              | Type    | Default |
| -------- | ---------------------------------------------------------------------------------------- | ------- | ------- |
| key      | Column key                                                                               | string  | -       |
| name     | Column name                                                                              | string  | -       |
| sortable | Set it as `true` if you want to make the column sortable.                                | boolean | false   |
| width    | Set the width for specific column. E.g. Set it as `10`, which means the width is `10px`. | number  | -       |




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
