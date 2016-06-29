const Classnames = require('classnames');
const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const __styles = require('./weapon_list.scss');

const WeaponList = React.createClass({
  propTypes: {
    selectedWeapon: React.PropTypes.string,
    weaponList: ImmutablePropTypes.list.isRequired
  },

  render: function() {
    var {weaponList, selectedWeapon} = this.props;

    return (
      <nav className="weapon-list-container">
        <h2 className='weapon-list-header'>Weapons</h2>
        <ul className='weapon-list'>
          {
            weaponList.map(weapon => {
              const weaponId = weapon.get('id');
              return (
                <li
                  key={weaponId}
                  className={weaponId === selectedWeapon ? 'active' : null}
                  onClick={() => this._selectWeapon(weaponId)}>
                  {weapon.get('name')}
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  },

  _selectWeapon: (weaponId) => {
    // Todo actions
    console.log(weaponId);
  }
});

module.exports = WeaponList;