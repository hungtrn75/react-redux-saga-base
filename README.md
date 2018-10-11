Building...!!!
* Usage
1. sudo npm install json-server -g
2. npm install
3. json-server api.json -p 4000 --watch (root)
4. npm run dev

* API <br>
Register<br>
method: POST<br>
headers: none<br>

```
Input :
{
    name: '...',
    email: '...',
    password: '...',
    password_confirm: '...'
}
```
```
Output:
{
    message: 'Register Successfully'
}
```

Login<br>
method: POST<br>
```
Input :
{
    headers: {
        Authorization: Bearer + ${token}
    },
    email: '...',
    password: '...'
}
```
```
Output:
{
    token: 'abcxyz',
}
```
---------------------------------------------------

Products<br>
RESTful API<br>
```
Input: 
{
    headers: {
        Authorization: Bearer + ${token}
    },
    ...
}
```
```
Output: {
    Object Data
}
```

