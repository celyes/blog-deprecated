<script>
 import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'sveltestrap';

  let isOpen = false;
  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="light" light expand="md">
  <div class="container">
  <NavbarBrand href="/">Ilyes</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
        <NavItem>
          <NavLink href="#">PHP</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">JS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Web Design</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem>
    </Nav>
  </Collapse>
  </div>
</Navbar>