import {createHash} from 'crypto'

import Table from "../components/Table"

const Home = ({data}) => {
  return (
    <Table results={data}/>
  )  
}

export default Home

const getCharacterData = async ({id}) => {
  const timestamp = new Date().getTime()
  const hash = createHash('md5').update(timestamp + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY).digest('hex');
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}&ts=${timestamp}` 
  const res = await fetch(url)
  return res
}

export const getStaticProps = async () => {
  const marvel_character_id_list = [
    1009351,1009368,1009718,1009629,
    1009664,1009220,1009297,1009697,1010744,
    1010350,1009722,1009268,1011011,1009417,
    1011054,1009189,1009562,1009382,1009257,1010802
  ]
  let response = await Promise.allSettled(marvel_character_id_list.map(el => getCharacterData({id:el})))
  let data = []
  for(const el of response){
      const result = await el.value.json()
      if(result.code!=200 || el.status=='rejected'){
        data.push({code:404})
      }else{
        data.push({code:200,data : result.data.results[0]})
      }
  }
 
  return {
    props : 
    {
      data
    }
  }
}

