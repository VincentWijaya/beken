SELECT id as ID, username as UserName, (SELECT id FROM user WHERE id = u1.parent) as Parent FROM user u1;