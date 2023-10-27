import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let router = express.Router();

const books = [    {
    "name": "Harry Potter and the Order of the Phoenix",
    "img": "https://bit.ly/2IcnSwz",
    "summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look toundermine Dumbledore's authority at Hogwarts and discredit Harry."
     
},
{
    "name": "Harry Potter and the Order of the Phoenix",
"img": "https://bit.ly/2IcnSwz",
"summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who in turn look to undermine Dumbledore's authority at Hogwarts and discredit Harry."
},

]


router.get('/',(req, res) =>{
   //console.log(users);

   res.send(books);
    res.send('Hello');
});

router.post('/',(req, res) => {
    const book = req.body;

    books.push({...book, id: uuidv4()});

    res.send('post request done')
});

router.get('/:id',(req, res)=>{
    const { id } = req.params;

    const foundBook = books.find((book)=>book.id = id);

    res.send(foundBook);
});

router.delete('/:id',(req, res)=>{
    const { id } = req.params;

    books = books.filter((book)=>book.id = id);
    res.send('delete book');
});

router.patch('/:id',(req, res)=>{
    const { id } = req.params;
    const { name,img,summary } = req.body;

    const book = books.find((book)=>book.id=id);
    
    if(name) book.name = name;
    
    if(img) book.img = img;
    
    if(summary) book.summary = summary;
    
    res.send("book has been updated");
    
})
export default router;