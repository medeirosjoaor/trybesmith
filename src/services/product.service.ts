import pool from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(pool);
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.model.getAll();

    return result;
  }

  public async create(product: Product): Promise<Product> {
    const result = await this.model.create(product);

    return result;
  }

  public async update(productsIds: number[], id: number) {
    await this.model.update(productsIds, id);
  }
}

export default ProductService;
