import React from "react";
import Image from "next/image";
import { articles } from "@/locals/data/articles";
import "../../style/components/ArticlesSection.scss"

const ArticlesSection = () => {
    return (
        <section className="articles-section py-5" id="Resources">
            <div className="container">
                <div className="text-center mb-4">
                    <span className="badge bg-primary py-2 px-2">Resources</span>
                    <h2 className="section-title mt-2">Our articles on dental health</h2>
                    <p className="section-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt integer elit cum sed etiam.
                    </p>
                </div>

                <div className="row">
                    {articles?.length > 0 && articles.map((article) => (
                        <div className="col-md-6 col-lg-4 mb-4 hover-effect articleCard" key={article.id}>
                            <div className="card h-100 shadow-sm">
                                <div className="position-relative" style={{ height: "200px" }}>
                                    <Image
                                        src={article.image || "/fallback.jpg"}
                                        alt={article.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="card-img-top"
                                    />
                                </div>
                                <div className="card-body">
                                    <span className="badge bg-primary py-2">{article.category}</span>
                                    <h5 className="card-title mt-2">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-muted">{article.date}</span>
                                        <a href="#" className="btn btn-link">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticlesSection;
