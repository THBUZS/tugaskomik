import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [isi, setIsi] = useState("")
  const [list, setList] = useState(null)

  const getKomik = () => {
    fetch(`https://komiku-api.fly.dev/api/comic/search/${isi}`)
      .then((response) => response.json())
      .then(({data}) => setList(data));
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className='container'>
      <div className="input-group mt-3 mb-3">
  <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={isi} onInput={(e) => setIsi (e.target.value)}/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon1"onClick={getKomik}>Search</button>
</div>
  <div className="row">
    {list &&
  list.map ((komik) => (
      <div className="col-md-4" key={komik.title}>
      <div className="card">
      <img src={komik.image} className="card-img-top"/>
      <div className="card-body">
      <h5 className="card-title">{komik.title}</h5>
      <p className="card-text">{komik.desc}</p>
  </div>
  </div>
  </div>
    ))}
  </div>
  </div>
  
  </>
  )
}
