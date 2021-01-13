import React, { Component } from 'react'
import classes from '../../Components/MainPage/SubPage/Subpage.css'
class ReviewProjects extends Component {
    titles = []
    render() {
        try {

            for (let i = 0; i < this.props.projects.count; i++) {
                this.titles.push(this.props.projects.data[i].title);
            }
            this.titles.map(el => {
                console.log(el)
            })
        } catch (err) {
            console.log(err);
        }
        const items = []
        for (const [index, value] of this.titles.entries()) {
            items.push(<p key={index}>{value}</p>)
          }
        return (
            <div className={classes.Subpage}>
               {items}
            </div>




        )

    }

}

export default ReviewProjects;