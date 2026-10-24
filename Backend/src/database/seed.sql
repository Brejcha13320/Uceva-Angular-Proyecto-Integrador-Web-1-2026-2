-- Insertar usuarios
INSERT INTO users (name, lastname, age, email, engineering)
VALUES
    ('Carlos', 'Ramirez', 22, 'carlos@example.com', 'Sistemas'),
    ('Laura', 'Gomez', 21, 'laura@example.com', 'Electronica'),
    ('Andres', 'Martinez', 24, 'andres@example.com', 'Industrial'),
    ('Maria', 'Lopez', 20, 'maria@example.com', 'Ambiental'),
    ('Sofia', 'Torres', 23, 'sofia@example.com', 'Biomedica');

-- Insertar productos
INSERT INTO products (name, category, price)
VALUES
    ('Leche entera', 'Lacteos', 4500),
    ('Queso campesino', 'Lacteos', 12000),
    ('Carne de res', 'Carnes', 28000),
    ('Manzana roja', 'Frutas', 2500),
    ('Zanahoria', 'Verduras', 1800);