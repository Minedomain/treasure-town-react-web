import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Review from './Review'
import Blog from './Blog'
import Forum from './Forum'

export default function RouterPage() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/review' exact component={Review} />
                    <Route path='/blog' exact component={Blog} />
                    <Route path='/forum' exact component={Forum} />
                </Switch>
            </Router>  
        </div>
    )
}
