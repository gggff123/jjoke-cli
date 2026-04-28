#!/usr/bin/env node
import {input,select,confirm} from '@inquirer/prompts'
import chalk from 'chalk'
import figlet from 'figlet'
import gradient from 'gradient-string'
//main app logic
let joke = gradient(['blue','orange'])
function banner() {
      const textq=figlet.textSync('Joke CLI',{
            font:'Terrace'
      })
      console.log(joke(textq))
}
banner()
const select_joke = await select({
      message:'What kind of joke do you want to have?: ',
      choices:[
            {name:'Any',value:'Any'},
            {name:'Programming',value:'Programming'},
            {name:'Miscellaneous',value:'Miscellaneous'},
            {name:'Dark',value:'Dark'},
            {name:'Pun',value:'Pun'},
            {name:'Spooky',value:'Spooky'},
            {name:'Christmas',value:'Christmas'}
      ]
})
const base_url='https://v2.jokeapi.dev/joke/'
const var1='Any'
const var2='Programming'
const var3='Miscellaneous'
const var4='Dark'
const var5='Pun'
const var6='Spooky'
const var7='Christmas'
//get joke based on variant
async function get_joke(url,vars){
      const get_based=await fetch(url+vars)
      const result=await get_based.json()
      return console.log(chalk.bold.hex('#34ebc0')(result.setup + " " + result.delivery));
}
//evaluation
if (select_joke==var1){
      get_joke(base_url,var1)
}else if (select_joke==var2){
      get_joke(base_url,var2)
}else if (select_joke==var3){
      get_joke(base_url,var3)
}else if (select_joke==var4){
      get_joke(base_url,var4)
}else if (select_joke==var5){
      get_joke(base_url,var5)
}else if (select_joke==var6){
      get_joke(base_url,var6)
}else if (select_joke==var7){
      get_joke(base_url,var7)
}