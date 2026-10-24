import { pool } from "../../../config/database";
import { UserEngineering, User } from "../../../domain/interfaces/user.interface";

/**
 * Servicio encargado de la generación y gestión de usuarios.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar usuarios
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class UsersService {

  /**
   * Lista de ingenierías disponibles para los usuarios.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente una carrera
   * a cada usuario generado.
   */
  private UserEngineerings: UserEngineering[] = [
    'Sistemas',
    'Electronica',
    'Biomedica',
    'Industrial',
    'Ambiental',
  ];

  /**
   * Consulta y retorna todos los usuarios de la base de datos
   * @returns Retorna los usuarios de la base de datos
   */
  public async getAllUsers(): Promise<User[]> {
    const sql = `SELECT * FROM users;`;
    const result = await pool.query(sql);
    return result.rows.map((row) => ({
      id: Number(row.id),
      name: row.name,
      lastname: row.lastname,
      age: Number(row.age),
      email: row.email,
      engineering: row.engineering as UserEngineering,
    }));
  }

}
