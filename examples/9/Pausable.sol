

contract Pausable {
  event Paused(address account);
  event Unpaused(address account);

  bool private _paused;

  address private _pauser;

  constructor () public {
    _paused = false;
    _pauser = msg.sender;
  }

  /**
    * @return True if the contract is paused, false otherwise.
    */
  function paused() public view returns (bool) {
    return _paused;
  }

  /**
    * @dev Modifier to make a function callable only when the contract is not paused.
    */
  modifier whenNotPaused() {
    require(!_paused);
    _;
  }

  modifier onlyPauser() {
    require(msg.sender == _pauser);
    _;
  }

  /**
    * @dev Modifier to make a function callable only when the contract is paused.
    */
  modifier whenPaused() {
    require(_paused);
    _;
  }

  /**
    * @dev Called by a pauser to pause, triggers stopped state.
    */
  function pause() public onlyPauser whenNotPaused {
    _paused = true;
    emit Paused(msg.sender);
  }

  /**
    * @dev Called by a pauser to unpause, returns to normal state.
    */
  function unpause() public onlyPauser whenPaused {
    _paused = false;
    emit Unpaused(msg.sender);
  }
}