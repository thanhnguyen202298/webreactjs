import React from 'react';
import '../styles/home.css';
import data from '../img/dataimg.json';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
        console.log(data.imgs.map((val,i)=>val.name+" "+i))
        // this.loadData();
    }
    // loadData(){
    //     fetch('../img/dataimg.json')
    //     .then((res)=>{this.state.data= res.json.data});
    //     console.log(this.state.data);
    // }
    renderProduct(){

        data.imgs.map((val,i)=>{
            <li className="item">
                <img src={val.key} />
                <span>{val.name}</span></li>
        })
        // var str=""; var arr=data;
        // for (var i=0;i<arr.lenght;i++){
        //     str+= "<li className='item'><img src='"+arr[i].key+
        //         "' /><span>"+arr[i].name+"</span></li>";
        // }
        // console.log(str)
        // return str;
    }

    render(){
        return(
                <ul className='content'>
                { data.imgs.map((val,i)=>
                        <li key={i} className="item">
                            <img src={val.key} />
                            <span>{val.name}</span>
                            <ul className="sub"><li>hid</li></ul>
                            </li>)
                }
                </ul>
            
        );
    }
}