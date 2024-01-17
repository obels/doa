import React, { Component } from "react";
import Table from "../directory/employeeTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Pagination } from "../common/webPagination";
import { ListGroup } from "../common/listGroupFilter";
import SearchBar from "../common/searchBar";
import apiClient from "../../services/api-client";

export default class Directory extends Component {
  state = {
    employees: [],
    currentActive: false,
    columnSelect: { path: "", order: "" },
    pageSize: 4,
    currentPage: 1,
    divisionFilter: 0,
    searchValue: "",
    errors: "",
    itemsPerPage: [{ pageSize: 1 }, { pageSize: 5 }, { pageSize: 10 }],
  };

  componentDidMount() {
    apiClient
      .get("/users")
      .then((response) => this.setState({ employees: response.data }))
      .catch((error) => this.setState({ errors: error.message }));
  }

  handleColumn = (path) => {
    const columnSelect = { ...this.state.columnSelect };

    if (columnSelect.path === path) {
      columnSelect.order = columnSelect.order === "asc" ? "desc" : "asc";
    } else {
      columnSelect.path = path;
      columnSelect.order = "asc";
    }

    this.setState({ columnSelect });
  };

  handleActive = (path) => {
    const employeesCopy = [...this.state.employees];
    const index = employeesCopy.indexOf(path);
    employeesCopy[index] = { ...employeesCopy[index] };
    employeesCopy[index].active = !employeesCopy[index].active;

    this.setState({ employees: employeesCopy });
  };

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (e) => {
    this.setState({ searchValue: e, currentPage: 1 });
  };

  handleDivision = (path) => {
    this.setState({ divisionFilter: path, currentPage: 1 });
  };

  handlePageSize = (pageSize) => {
    this.setState({ pageSize, currentPage: 1 });
  };

  getFinalData = () => {
    const {
      employees,
      columnSelect,
      currentPage,
      pageSize,
      divisionFilter,
      searchValue,
    } = this.state;

    const afterSearch = searchValue
      ? employees.filter((f) =>
          f.name.toLowerCase().startsWith(searchValue.toLowerCase())
        )
      : employees;

    const divFilter =
      divisionFilter && divisionFilter.path
        ? afterSearch.filter((f) => f.division === divisionFilter.path)
        : afterSearch;

    const columnSorted = _.orderBy(
      divFilter,
      columnSelect.path,
      columnSelect.order
    );

    const startIndex = (currentPage - 1) * pageSize;
    const pagination = _(columnSorted).slice(startIndex).take(pageSize).value();
    return { finalData: pagination, sortCount: columnSorted };
  };

  render() {
    const { finalData, sortCount } = this.getFinalData();
    const { pageSize, currentPage, searchValue } = this.state;

    return (
      <div className="container-sm m-1" style={{}}>
        {this.state.errors && (
          <div style={{ color: "red", marginBottom: 10 }}>
            "Unable to Retrive Data Due to a {this.state.errors}"
          </div>
        )}
        <div>
          <h5>Current Active Users {sortCount.length} </h5>
          <span>
            <SearchBar onChange={this.handleSearch} value={searchValue} />
            <ListGroup onDivisionSelect={this.handleDivision} />
            <button className="btn btn-primary ">
              <Link
                style={{ color: "white", display: "contents" }}
                to="newemployee"
              >
                Add Employee
              </Link>
            </button>
          </span>
          <div
            className="grid-content"
            style={{ height: 450, backgroundColor: "#f2f2f2" }}
          >
            <Table
              employeeData={finalData}
              onColumnSelect={this.handleColumn}
              onActiveSelect={this.handleActive}
              currentActive={this.state.currentActive}
              currentColumn={this.state.columnSelect}
            />
          </div>
          <div style={{ marginTop: 5, display: "inline-block" }}>
            <Pagination
              dataCount={sortCount.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageSelect={this.handlePage}
            />
            <select
              style={{ display: "flex" }}
              onChange={(e) => this.handlePageSize(e.target.value)}
              id="select"
            >
              {this.state.itemsPerPage.map((item) => {
                return (
                  <option value={item.pageSize} key={item.pageSize}>
                    {item.pageSize}
                  </option>
                );
              })}
            </select>
            <label className="float-right" htmlFor="select">
              Items Per Page
            </label>
          </div>
        </div>
      </div>
    );
  }
}
