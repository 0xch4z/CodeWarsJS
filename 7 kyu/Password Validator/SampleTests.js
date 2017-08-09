Test.assertEquals(password("Abcd1234"), true);
Test.assertEquals(password("Abcd123"), false);
Test.assertEquals(password("abcd1234"), false);
Test.assertEquals(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"), true);
Test.assertEquals(password("ABCD1234"), false);
Test.assertEquals(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"), true);
Test.assertEquals(password("!@#$%^&*()-_+={}[]|\:;?/>.<,"), false);