import React from "react";
import axios from "axios";
import { Button, Card } from "antd";
import CustomForm from "../components/Form";
class ArticleDetail extends React.Component {
  state = {
    article: {}
  };
  componentDidMount() {
    document.title = "DJ REACT";
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://localhost:8000/api/${articleID}`);
    this.props.history.push("/");
  }

  handleDelete = event => {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://localhost:8000/api/${articleID}`).then(res => {
      this.setState({ article: res.data });
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <CustomForm
          requestType="put"
          articleID={this.props.match.params.articleID}
          btnText="Update"
        />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

export default ArticleDetail;
