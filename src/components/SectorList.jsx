import { Fragment } from "react";

const SectorList = ({ sectorList }) => {
  const hasChildren = sectorList && sectorList.length;

  return (
    <>
      {hasChildren && sectorList.map((item, index) => (
        <Fragment key={item.id}>
          <option value={item.id} className={`${!item?.child?.length ? 'pl-4' : ''}`}>{item.name}</option>
          <SectorList sectorList={item.child} />
        </Fragment>
      ))}
    </>
  );
};

export default SectorList;
