CREATE TABLE cows (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  color VARCHAR(255),
  sex VARCHAR(255),
  location VARCHAR(255),
  birth_date DATE,
  breed VARCHAR(255)
);
CREATE TABLE medical_records (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cow_id INT,
  vaccine VARCHAR(255),
  health_issue VARCHAR(255),
  date DATE,
  FOREIGN KEY (cow_id) REFERENCES cows(id)
);
CREATE TABLE births (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cow_id INT,
  offspring_count INT,
  birth_date DATE,
  FOREIGN KEY (cow_id) REFERENCES cows(id)
);
CREATE TABLE movements (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cow_id INT,
  from_location VARCHAR(255),
  to_location VARCHAR(255),
  movement_date DATE,
  FOREIGN KEY (cow_id) REFERENCES cows(id)
);
