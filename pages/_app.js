import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from '../store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../static/css/App.css';
import './../static/css/login.css';
import { I18nextProvider } from 'react-i18next'
import startI18n from '../lib/startI18n'
import { getTranslation } from '../lib/translationHelpers'
import { setCookie, getCookie, removeCookie } from './../utils/cookie';
import config from './../config'

const lang = "ja";
class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {}
        let translations = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx })
                translations = await getTranslation(
                lang,
                ['common'],
                config.CLIENT_URL + '/static/locales/'
            )
        }

        return { pageProps, translations }
    }

    constructor (props) {
        super(props)
        this.i18n = startI18n(props.translations, lang)
    }

    render (props) {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <I18nextProvider i18n={this.i18n}>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </I18nextProvider>
            </Container>
        )
    }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp))
