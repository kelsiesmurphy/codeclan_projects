package com.codeclan.employeedata;

import com.codeclan.employeedata.models.Employee;
import com.codeclan.employeedata.repositories.EmployeeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EmployeedataApplicationTests {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canSaveAnEmployee(){
		Employee newEmployee = new Employee("Jimmy Crickett", 40, 12345, "jimmycirckett@email.com");
		employeeRepository.save(newEmployee);
	}

}
