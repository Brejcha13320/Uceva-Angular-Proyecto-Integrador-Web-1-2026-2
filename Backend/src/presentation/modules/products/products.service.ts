import { Product, ProductCategory } from '../../../domain/interfaces/product.interface';
import { pool } from '../../../config/database';

/**
 * Servicio encargado de la generación y gestión de productos.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar productos
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class ProductsService {

  /**
   * Categorías disponibles para los productos.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente una categoría
   * a cada producto generado.
   */
  private categories: ProductCategory[] = [
    'Carnes',
    'Frutas',
    'Lacteos',
    'Verduras'
  ];

  /**
   * Consulta y retorna todos los productos de la base de datos
   * @returns Retorna los productos de la base de datos
   */
  public async getAllProducts(): Promise<Product[]> {
    const sql = `SELECT * FROM products;`;
    const result = await pool.query(sql);
    return result.rows.map((row) => ({
      id: Number(row.id),
      name: row.name,
      category: row.category as ProductCategory,
      price: Number(row.price),
    }));
  }

}
