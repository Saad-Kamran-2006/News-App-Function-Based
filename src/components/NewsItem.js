import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: -5,
              top: -5,
            }}
          >
            <span className=" badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/107209272-1678897868490-gettyimages-1052865146-AmerBrands_1801023_1413.jpeg?v=1708361386&w=1920&h=1080"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">
              {!description
                ? "Capital One will acquire Discover Financial Services, per a report from The Wall"
                : description}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {!date ? "Undefined" : new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
