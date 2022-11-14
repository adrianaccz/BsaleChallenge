import {getConnection} from "./../database/database"

const getProducts = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * from product");
    //console.log(result);
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
};

const getProductsSearch = async (req, res) => {
  try {
    const {name} = req.query
    const connection = await getConnection();
    //const query = "SELECT * from product where name LIKE '%"+name+"%'"
    //console.log(name);
    const result = await connection.query("SELECT * from product where name LIKE '%"+name+"%'");
    //console.log(result);
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
};

const getProductsCategoriesBear = async(req, res)=>{
  try {
    const connection = await getConnection();
    const query = "SELECT product.name AS name, product.price AS price,product.url_image AS url_image , category.name AS categories FROM product JOIN category ON product.category = category.id";
    const result = await connection.query(query);
    //console.log(result);
    res.json(result.filter(e=> e.categories == 'cerveza'))
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
const getProductsCategoriesRon = async(req, res)=>{
  try {
    const connection = await getConnection();
    const query = "SELECT product.name AS name, product.price AS price,product.url_image AS url_image , category.name AS categories FROM product JOIN category ON product.category = category.id";    const result = await connection.query(query);
    //console.log(result);
    res.json(result.filter(e=> e.categories == 'ron'))
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getProductsCategoriesEnergetic = async(req, res)=>{
  try {
    const connection = await getConnection();
    const query = "SELECT product.name AS name, product.price AS price,product.url_image AS url_image , category.name AS categories FROM product JOIN category ON product.category = category.id";    const result = await connection.query(query);
    //console.log(result);
    res.json(result.filter(e=> e.categories == 'bebida energetica'))
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
const getProductsCategoriesBeverage = async(req, res)=>{
  try {
    const connection = await getConnection();
    const query = "SELECT product.name AS name, product.price AS price,product.url_image AS url_image , category.name AS categories FROM product JOIN category ON product.category = category.id";    const result = await connection.query(query);
    //console.log(result);
    res.json(result.filter(e=> e.categories == 'bebida'))
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getProductsCategoriesPisco = async(req, res)=>{
  try {
    const connection = await getConnection();
    const query = "SELECT product.name AS name, product.price AS price,product.url_image AS url_image , category.name AS categories FROM product JOIN category ON product.category = category.id";    const result = await connection.query(query);
    //console.log(result);
    res.json(result.filter(e=> e.categories == 'pisco'))
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getProductsCategoriesSnack = async(req, res)=>{
  try {
    const connection = await getConnection();
    const query = "SELECT product.name AS name, product.price AS price,product.url_image AS url_image , category.name AS categories FROM product JOIN category ON product.category = category.id";    const result = await connection.query(query);
    //console.log(result);
    res.json(result.filter(e=> e.categories == 'snack'))
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getProductsCategoriesVodka = async(req, res)=>{
  try {
    const connection = await getConnection();
    const query = "SELECT product.name AS name, product.price AS price,product.url_image AS url_image , category.name AS categories FROM product JOIN category ON product.category = category.id";    const result = await connection.query(query);
    //console.log(result);
    res.json(result.filter(e=> e.categories == 'vodka'))
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getProducts,
  getProductsSearch,
  getProductsCategoriesBear,
  getProductsCategoriesRon,
  getProductsCategoriesEnergetic,
  getProductsCategoriesBeverage,
  getProductsCategoriesPisco,
  getProductsCategoriesSnack,
  getProductsCategoriesVodka
};