<h1 align="center">Planets ReactJs</h1>

This project is a simple animated web app written with universal JavaScript, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents

- [Features](#features)
- [Directory Structure](#directory-structure)
- [How to run](#how-to-run)
- [Application Stack](#application-stack)
- [App Flow Based on Files and Directories](#app-flow-based-on-files-and-directories)
- [Importing Reusable Components](#importing-reusable-components)
- [Registering New Components to Route](#registering-new-components-to-route)
- [Call Containers from Pages](#call-containers-from-pages)
- [Add New Pages](#add-new-pages)
- [Add New Axios Method in apiClientjs](#add-new-axios-method-in-apiClientjs)
- [Add New Global Function in commonjs](#add-new-global-function-in-commonjs)
- [Add New apiClient Consumer in servicesjs](#add-new-apiClient-consumer-in-servicesjs)
- [Hot Reload](#hot-reload)
- [Live Demo](https://planets-reactjs.vercel.app/)


## Features
1. Responsive page
2. Animated loader when load data
3. Modern animated cards
4. Animated button *Add to Wishlist*
5. Pagination
6. Animated page not found component
7. Simple and elegant snackbar

## Directory Structure

```
planets-reactjs/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
        images/
    components/
        Button/
        Card/
        Header/
        Layout/
        Loader/
        PageTitle/
        Pagination/
        Snackbar/
    containers/
        ListContainer/
        NotFoundContainer/
        WishlistContainer/
    navigation/
        BrowserHistory.js
        RenderPath.js
        Routes.js
    pages/
        index.js
        not-found.js
        wishlist.js
    utils/
        apiClient.js
        common.js
        reducer.js
        services.js
        store.js
    App.js
    App.test.js
    index.js
    logo.svg
    .dockerignore
    .eslintrc
    .gitignore
    Dockerfile
```

1. assets => Contains global assets such as images, etc.
2. components => Contains reusable global components.
3. containers => Contains containers of components.
4. navigation => Contains of cusotm routes workaround.
5. pages => Entry door of each pages.
6. utils => Contains reusable self made library, functions, or and services.

## How to run

1. Using terminal

`git@github.com:FandiAR/planets-reactjs.git && cd planets-reactjs && npm i && npm start`

2. Using docker

`docker build -t planets-reactjs:dev . && docker run -d -p 3000:3000 planets-reactjs:dev`

hit our application in a browser at http://localhost:3000/

## Application Stack

1. [ReactJs](https://reactjs.org/) A JavaScript library for building user interfaces.
2. [Axios](https://www.npmjs.com/package/axios) Promise based HTTP client for the browser and node.js.
3. [Eslint](https://eslint.org/) JavaScript codes linter.
4. [react-helmet](https://www.npmjs.com/package/react-helmet) React component will manage all of your changes to the document head.
5. [Docker](https://www.docker.com/) Accelerate how you build, share and run modern applications.
6. [styled-components](https://styled-components.com/) Use the best bits of ES6 and CSS to style your apps without stress.

## App Flow Based on Files and Directories

src/index.js => src/App.js => pages => containers.

## Importing Reusable Components

For example:

```
    import PageTitle from 'components/PageTitle';

    const ComponentsCaller = (props) => {
        const { all props here } = props;

        return (
            <PageTitle title="Web Title For This Page">
                <Another Html />
            </PageTitle>
        );
    };
    export default ComponentsCaller;
```

## Registering New Components to Route

go to src/navigation/Routes.js

```
    import NewPage from 'pages/new-page';

    export const MainRoutes = [
        {
            path: '/path-to-new-page',
            component: NewPage;
        },
    ];
```

## Call Containers from Pages

```
    import PageTitle from 'components/PageTitle';
    import NewContainer from 'containers/NewContainer';

    const NewPage = ({ history }) => {
        return (
            <PageTitle title="New Page">
                <NewContainer history={history} />
            </PageTitle>
        );
    };
    export default NewPage;
```

## Add New Pages

go to src/pages

create new file, exmple `page.js`


## Add New Axios Method in apiClientjs

open file src/utils/apiClient.js

for example, we need to add method 'post'

```
    case 'post':
        return axios
            .post(baseUrl + url, body, { headers, params })
            .catch((error) => { throw error; })
            });
```

## Add New Global Function in commonjs

open file src/utils/common.js

```
    export const newCommonFunction = (params) => {
        // do something here
    };
```

## Add New apiClient Consumer in servicesjs

open file src/utils/services.js

```
    import apiClient from './apiClient';
    export const getNewData = async (param) => {
        const result = await ApiClient('get', 'url')
            .then(({ data }) = data);

            return result;
    };
```

## Hot Reload

open file src/index.js

```
    if (module.hot) {
        module.hot.accept('./App', () => {
            const NextApp = require('./App').default;
            ReactDOM.hydrate(
                <BrowserRouter>
                    <Router history={history}>
                    <NextApp />
                    </Router>
                </BrowserRouter>,
                document.getElementById('root')
            );
        });
    }
```
<h4 align="center">
    <a href="https://planets-reactjs.vercel.app/">Live Demo</a>
</h4>