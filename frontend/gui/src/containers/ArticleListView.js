import React from "react";
import Articles from "../components/Article";
import axios from "axios";
import CustomForm from "../components/Form";

class ArticleList extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios.get("http://localhost:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <br />
        <h2>Create an Article</h2>
        <CustomForm requestType="post" artileID={null} btnText="Create" />
      </div>
    );
  }
}

export default ArticleList;
