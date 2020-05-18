import React from "react";
import PropTypes from "prop-types";
import styles from './News.module.css';

class Article extends React.Component {
    state = {
        visible: false
    }

    handleReadMoreClick = (e) => { // добавили метод
        e.preventDefault()
        this.setState({ visible: true })
    }

    render() {
        const { author, text, bigText } = this.props.data
        const { visible } = this.state

        return (
            <div className={styles.article}>
                <p className={styles.news__author}>{author}:</p>
                <p className={styles.news__text}>{text}</p>
                {
                    !visible && <a onClick={this.handleReadMoreClick} href="#readmore" className={styles.news__readmore}>Подробнее</a>
                }
                {
                    visible && <p className={styles.news__big-text}>{bigText}</p>
                }
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
};

export default Article;