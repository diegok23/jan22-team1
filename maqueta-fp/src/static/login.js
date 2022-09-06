const ENDPOINT = 'http://localhost:4000'

export default function login ({email, password}){
  return fetch (`${ENDPOINT}/user/signin`, {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email,password })
  }).then(res => {
    if(!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => { 
    console.log(res);
   const {jwt,id} = res 
  
   return {jwt,id}
  })  
}