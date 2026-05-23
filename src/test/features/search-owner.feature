Feature: Buscar propietarios

  Scenario: Buscar propietario por apellido

    Given el usuario abre PetClinic
    When navega al módulo Owners
    And selecciona Search
    And escribe el apellido del propietario
    And presiona Find Owner
    Then el sistema muestra los resultados de búsqueda