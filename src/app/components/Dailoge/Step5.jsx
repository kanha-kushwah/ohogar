import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "@/redux/filter";

const Step5 = ({ formData, onPrev, onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: formData,
  });

  const existingFilters = useSelector((state) => state.filterdata?.filter);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    SelectInterest: formData?.SelectInterest || "",
    bhkType: formData?.bhkType || "",
    localities: formData?.selectedLocality ? [formData.selectedLocality] : [],
    minBudget: formData?.minBudget || 0,
    maxBudget: formData?.maxBudget || 1000,
    propertyType: formData?.propertyType || "",
    saleType: formData?.saleType || "",
    launchTime: formData?.launchTime || "",
    possessionTime: formData?.possessionTime || "",
  });

  const [newLocality, setNewLocality] = useState("");

  useEffect(() => {
    if (existingFilters) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        ...existingFilters,
        localities: existingFilters.localities || [],
      }));
    }
  }, [existingFilters]);

  useEffect(() => {
    // Log the collected data for verification
    console.log("Collected formData:", formData);
  }, [formData]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleAddLocality = () => {
    if (newLocality.trim()) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        localities: [...prevFilters.localities, newLocality],
      }));
      setNewLocality("");
    }
  };

  const handleBudgetChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minBudget: value[0],
      maxBudget: value[1],
    }));
  };

  const onFormSubmit = (data) => {
    onSubmit({ ...formData, ...filters });
    const mergedData = { ...formData, ...filters, ...data };
    dispatch(addFilter(mergedData));
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)} className="w-100 login">
      <div className="d-flex align-items-center justify-content-between">
        <h2>Filter</h2>
        <p>
          <b>
            <u>Clear all</u>
          </b>
        </p>
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <p className="p-small">
          You are searching in{" "}
          <span className="text-black">
            <b>{formData?.selectedCity} </b>
          </span>{" "}
        </p>
        <p className="p-small text-right text-black pointer">Change Location</p>
      </div>

      <div className="apply-filter mt-md-4 border-top pt-4">
        <p>Filter Applied</p>
        <p>{filters.localities.join(", ")}</p>
      </div>

      <div className="filter-box">
        <div className="inner-one-filter mb-4">
          <p>
            <b>I’m Looking to</b>
          </p>
          <div className="d-flex g-10">
            <button
              type="button"
              className={filters.SelectInterest === "Buy" ? "active" : ""}
              onClick={() => setFilters({ ...filters, SelectInterest: "Buy" })}
            >
              Buy
            </button>
            <button
              type="button"
              className={filters.SelectInterest === "Rent" ? "active" : ""}
              onClick={() => setFilters({ ...filters, SelectInterest: "Rent" })}
            >
              Rent
            </button>
            <button
              type="button"
              className={
                filters.SelectInterest === "Commercial" ? "active" : ""
              }
              onClick={() =>
                setFilters({ ...filters, SelectInterest: "Commercial" })
              }
            >
              Commercial
            </button>
            <button
              type="button"
              className={
                filters.SelectInterest === "PG/Co-Living" ? "active" : ""
              }
              onClick={() =>
                setFilters({ ...filters, SelectInterest: "PG/Co-Living" })
              }
            >
              PG/Co-Living
            </button>
          </div>
        </div>

        <div className="inner-one-filter mb-4">
          <p>
            <b>Localities</b>
          </p>
          <div className="d-flex g-10">
            <button type="button" onClick={handleAddLocality}>
              + Add More
            </button>
            <input
              type="text"
              value={newLocality}
              onChange={(e) => setNewLocality(e.target.value)}
              placeholder="Add Locality"
            />
          </div>
        </div>

        <div className="inner-one-filter mb-4">
          <p>
            <b>BHK Type</b>
          </p>
          <div className="d-flex g-10 radio-filter">
            <label>
              <input
                type="radio"
                name="bhkType"
                value="1 RK"
                onChange={handleFilterChange}
                checked={filters.bhkType === "1 RK"}
              />
              1 RK
            </label>
            <label>
              <input
                type="radio"
                name="bhkType"
                value="1 BHK"
                onChange={handleFilterChange}
                checked={filters.bhkType === "1 BHK"}
              />
              1 BHK
            </label>
            <label>
              <input
                type="radio"
                name="bhkType"
                value="2 BHK"
                onChange={handleFilterChange}
                checked={filters.bhkType === "2 BHK"}
              />
              2 BHK
            </label>
            <label>
              <input
                type="radio"
                name="bhkType"
                value="3 BHK"
                onChange={handleFilterChange}
                checked={filters.bhkType === "3 BHK"}
              />
              3 BHK
            </label>
          </div>
        </div>

        <div className="inner-one-filter mb-4 w-75">
          <p>
            <b>Budget</b>
          </p>
          <div className="d-flex justify-content-between mb-2">
            <span>{filters.minBudget}</span>
            <span>{filters.maxBudget}</span>
          </div>
          <div className="d-flex">
            <Slider
              range
              min={0}
              max={1000}
              defaultValue={[filters.minBudget, filters.maxBudget]}
              onChange={handleBudgetChange}
              value={[filters.minBudget, filters.maxBudget]}
            />
          </div>
        </div>

        <div className="inner-one-filter mb-4 w-75">
          <p>
            <b>Built-up Area</b>
          </p>
          <div className="d-flex justify-content-between mb-2">
            <span>{filters.minBudget}</span>
            <span>{filters.maxBudget}</span>
          </div>
          <div className="d-flex">
            <Slider
              range
              min={0}
              max={1000}
              defaultValue={[filters.minBudget, filters.maxBudget]}
              onChange={handleBudgetChange}
              value={[filters.minBudget, filters.maxBudget]}
            />
          </div>
        </div>

        <div className="inner-one-filter mb-4">
          <p>
            <b>Property Type</b>
          </p>
          <div className="d-flex g-10 radio-filter">
            <label>
              <input
                type="radio"
                name="propertyType"
                value="Apartments"
                onChange={handleFilterChange}
                checked={filters.propertyType === "Apartments"}
              />
              Apartments
            </label>
            <label>
              <input
                type="radio"
                name="propertyType"
                value="Independent House"
                onChange={handleFilterChange}
                checked={filters.propertyType === "Independent House"}
              />
              Independent House
            </label>
          </div>
        </div>

        <div className="inner-one-filter mb-4">
          <p>
            <b>Sale Type</b>
          </p>
          <div className="d-flex g-10 radio-filter">
            <label>
              <input
                type="radio"
                name="saleType"
                value="New Properties"
                onChange={handleFilterChange}
                checked={filters.saleType === "New Properties"}
              />
              New Properties
            </label>
            <label>
              <input
                type="radio"
                name="saleType"
                value="Resale Properties"
                onChange={handleFilterChange}
                checked={filters.saleType === "Resale Properties"}
              />
              Resale Properties
            </label>
          </div>
        </div>

        <div className="inner-one-filter mb-4">
          <p>
            <b>Launched</b>
          </p>
          <div className="d-flex g-10 radio-filter">
            <label>
              <input
                type="radio"
                name="launchTime"
                value="Within 1 Year"
                onChange={handleFilterChange}
                checked={filters.launchTime === "Within 1 Year"}
              />
              Within 1 Year
            </label>
            <label>
              <input
                type="radio"
                name="launchTime"
                value="Within 3 Years"
                onChange={handleFilterChange}
                checked={filters.launchTime === "Within 3 Years"}
              />
              Within 3 Years
            </label>
            <label>
              <input
                type="radio"
                name="launchTime"
                value="Within 10 Years"
                onChange={handleFilterChange}
                checked={filters.launchTime === "Within 10 Years"}
              />
              Within 10 Years
            </label>
          </div>
        </div>

        <div className="inner-one-filter mb-4">
          <p>
            <b>Possession</b>
          </p>
          <div className="d-flex g-10 radio-filter">
            <label>
              <input
                type="radio"
                name="possessionTime"
                value="Ready to move"
                onChange={handleFilterChange}
                checked={filters.possessionTime === "Ready to move"}
              />
              Ready to move
            </label>
            <label>
              <input
                type="radio"
                name="possessionTime"
                value="In 1 year"
                onChange={handleFilterChange}
                checked={filters.possessionTime === "In 1 year"}
              />
              In 1 year
            </label>
            <label>
              <input
                type="radio"
                name="possessionTime"
                value="In 3 years"
                onChange={handleFilterChange}
                checked={filters.possessionTime === "In 3 years"}
              />
              In 3 years
            </label>
            <label>
              <input
                type="radio"
                name="possessionTime"
                value="Beyond"
                onChange={handleFilterChange}
                checked={filters.possessionTime === "Beyond"}
              />
              Beyond
            </label>
          </div>
        </div>

        <Button
          className="start-btn w-50 btn btn-primary"
          variant="primary"
          type="submit"
          style={{ marginTop: "20px", background: "#313265", padding: "15px 0px" }}
        >
          View
        </Button>
      </div>
    </Form>
  );
};

export default Step5;
