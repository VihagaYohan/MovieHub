import React, { Component,useState,useEffect } from 'react'
import {StyleSheet,View,Text} from 'react-native'

// components
import {UITextView} from '.'

// constants
import {STYLES,CONSTANTS,DIMENSIONS, COLORS, UTILS} from '../constants'

interface IUITaglineProps{
    date:string,
    language:string,
    adult?:boolean
}

const UITagline = (props:IUITaglineProps) =>{
    // states
    const [genere, setGenre] = useState<string>("All")

    useEffect(()=>{
        _getGenere();
    },[])

    // get movie rating certificate
    const _getGenere = ()=>{
      if(props.adult!= undefined){
           console.log(props.adult)
        if(props.adult){
            setGenre('All')
        }else{
            setGenre("R")
        }
      }
    }

    return(
        <View style={styles.container}>
             <UITextView
             text={props.date}
             textStyle={styles.dateStyle}/>  

             <View>
                <UITextView
                text={`(${props.language})`}
                textStyle={styles.language}/>
            </View> 

            <View style={styles.dot}/>

            <View style={styles.ratingContainer}>
                <UITextView
                text={genere}
                textStyle={styles.genereStyle}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    dateStyle:{
        color:COLORS.grey.grey500,
        fontSize:UTILS.RNSize(13)
    },
    language:{
        color:COLORS.grey.grey500,
        fontSize:UTILS.RNSize(13),
        marginLeft:5
    },
    dot:{
        width:UTILS.RNSize(5),
        height:UTILS.RNSize(5),
        borderRadius:UTILS.RNSize(2.5),
        backgroundColor:COLORS.grey.grey500,
        marginHorizontal:UTILS.RNSize(5)
    },
    ratingContainer:{
        padding:UTILS.RNSize(3),
        borderWidth:UTILS.RNSize(1),
        borderColor:COLORS.grey.grey500,
        borderRadius:UTILS.RNSize(3)
    },
    genereStyle:{
        color:COLORS.grey.grey500,
        fontSize:UTILS.RNSize(13)
    }
})

export default UITagline