export default function login (){
  return `<form action="/submit" method="post">
  <input type="text" placeholder="enter your name"/>
  <br/>
  <input type="password" placeholder="enter your password"/>
  <br/>
  <button>Submit</button>
  <a href = '/'>Go to home </a>
  </form>`
}