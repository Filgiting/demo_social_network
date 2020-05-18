import React from "react";
import PropTypes from "prop-types";
import styles from './News.module.css';

class AddNews extends React.Component {
    state = { // добавили начальное состояние
        name: '',
        text: '',
        bigText: '',
        agree: false,
    }

    onBtnClickHandler = (e) => {
        e.preventDefault()
        const { name, text, bigText } = this.state
        this.props.onAddNews({
            id: +new Date(),
            author: name,
            text,
            bigText,
        })
    }

    handleChange = (e) => {
        //обработчик, в котором обновляем name и text
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    }

    handleCheckboxChange = (e) => { // обработчик кликов по чекбоксу
        // чтобы установить true/false считываем свойство checked
        this.setState({ agree: e.currentTarget.checked })
    }

    validate = () => {
        const { name, text, agree } = this.state
        if (name.trim() && text.trim() && agree) {
            return true
        }
        return false
    }

    render() {
        const { name, text, bigText } = this.state
        return (
            <form className={styles.add}>
                <input
                    id='name'
                    onChange={this.handleChange}
                    type='text'
                    className={styles.add__author}
                    placeholder='Ваше имя'
                    value={name}
                />
                <textarea
                    id='text'
                    onChange={this.handleChange}
                    className={styles.add__text}
                    placeholder='Текст новости'
                    value={text}>
                        </textarea>
                <textarea
                    id='bigText'
                    onChange={this.handleChange}
                    className={styles.add__text}
                    placeholder='Текст новости подробно'
                    value={bigText}>
                        </textarea>
                <label className={styles.add__checkrule}>
                    <input type='checkbox' onChange={this.handleCheckboxChange} /> Я согласен с правилами
                </label>
                <button
                    className={styles.add__btn}
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}>
                    Добавить новость
                </button>
            </form>
        )
    }
}

AddNews.propTypes = {
    onAddNews: PropTypes.func.isRequired, // func используется для проверки передачи function
};

export default AddNews;