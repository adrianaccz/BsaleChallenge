import { application, Router } from "express";
import { methods as productController } from "../controllers/product.controller";

const router = Router();

router.get('/', productController.getProducts);
router.get('/search', productController.getProductsSearch);
router.get('/beer', productController.getProductsCategoriesBear)
router.get('/ron', productController.getProductsCategoriesRon)
router.get('/energetic', productController.getProductsCategoriesEnergetic)
router.get('/beverage', productController.getProductsCategoriesBeverage)
router.get('/pisco', productController.getProductsCategoriesPisco)
router.get('/snack', productController.getProductsCategoriesSnack)
router.get('/vodka', productController.getProductsCategoriesVodka)

//curso git
router.post('/login', (req, res)=> {
  res.send('Estas en la ruta del login')
})//curso git
router.get('/registro', (req, res)=> {
  res.send('Estas en la ruta de registro')
})
export default router;