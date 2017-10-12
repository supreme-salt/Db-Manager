import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Landing from './Landing';
import ProductForm from './ProductForm';

// <Route path="/" component={Search} />
const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      seasons: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/products')
      .then(results => {
        this.setState({
          products: results.data.products,
          categories: results.data.categories,
          seasons: results.data.seasons
        });
      })
      .catch(err => console.log(err)); //eslint-disable-line
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => <Landing products={this.state.products} />} />
            <Route
              exact
              path="/form"
              render={() => <ProductForm categories={this.state.categories} seasons={this.state.seasons} />}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
