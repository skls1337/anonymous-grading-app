import React, { Component } from 'react';

import Requirements from './Requirements/Requirements';
import classes from './Project.css';
import Axios from 'axios';

class project extends Component {

    state={
        requirements:[],
        deadline:[],
        description:'',
        currentDeadline:'',
        lastDeadline:''
    }

    getProjectRequirments=()=>{
        Axios.get("http://localhost:3001/api/v1/projectrequirements").then(res=>{
            const requirements=res.data.data
            this.setState({
                description:requirements.description,
                requirements:requirements.requirements,
                deadline:requirements.deadline
            })
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            console.log(date);
            let ddl=[];
            this.state.deadline.forEach(element => {
                ddl.push(new Date(element.substr(0,10)))
            });

            let dateNew = ddl[2].getFullYear()+'-'+(ddl[2].getMonth()+1)+'-'+ddl[2].getDate();
            console.log(dateNew);

            this.setState({
                lastDeadline: dateNew
            })
            ddl.forEach(el=>{
                if(today>el){
                    console.log(el);
                    let date = el.getFullYear()+'-'+(el.getMonth()+1)+'-'+el.getDate();
                    this.setState({currentDeadline:date});
                }else{
                    console.log("clg din else"+ el);
                    let date = el.getFullYear()+'-'+(el.getMonth()+1)+'-'+el.getDate();
                    this.setState({currentDeadline:date});
                    throw 1;
                }
                
            })

            console.log(this.state.currentDeadline);
        }).catch(err=>console.log(err))
    }

    componentDidMount=()=>{
        this.getProjectRequirments();
    }

    render() {

        return (
            <div className={classes.Project}>
                <div className={classes.Text}>
                    <p>{this.state.description}</p>
                </div>

                {
                    console.log(this.state.currentDeadline)
                }

                <Requirements controls={this.state.requirements} />
                <p style={{ backgroundColor: '#FEFFFF' }}>Upcoming Deliverable: {this.state.currentDeadline}</p>
                <p style={{ backgroundColor: '#FEFFFF' }}>Deadline: {this.state.lastDeadline}</p>
            </div>
        );
    }
};

export default project;
