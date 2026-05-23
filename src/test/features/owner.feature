Feature: Gestión de propietarios

  Scenario: Crear propietario nuevo

    Given el usuario abre PetClinic
    When navega al módulo Owners
    And selecciona Add New
    And completa el formulario del propietario
    And guarda el propietario
    Then el sistema muestra el propietario creado