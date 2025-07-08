import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HasilPanjar from "../pages/HasilPanjar";
import { vi } from "vitest";

// Simulasi state lokasi
const mockLocation = {
  state: {
    title: "istri",
    kec: "Sumedang Selatan",
    kecTergugat: "Jatinangor",
    hargaPenggugat: {
      pendaftaran: 30000,
      redaksi: 10000,
      materai: 10000,
      proses: 75000,
      panggilanPenggugat: 50000
    },
    hargaTergugat: {
      panggilanTergugat: 60000
    },
    area: "dalam-kabupaten",
    areaTergugat: "luar-kabupaten"
  }
};

// 🔁 Mock useLocation dan useNavigate dari react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLocation: () => mockLocation,
    useNavigate: () => vi.fn(),
  };
});

describe("HasilPanjar Page", () => {
  test("Menampilkan judul Jumlah Total Biaya Panjar dan nilainya", () => {
    render(
      <MemoryRouter>
        <HasilPanjar />
      </MemoryRouter>
    );

    expect(screen.getByTestId("total-panjar-title")).toBeInTheDocument();
    expect(screen.getByTestId("total-panjar-value")).toBeInTheDocument();

    expect(screen.getByTestId("total-panjar-title").textContent).toMatch(
      /jumlah total biaya panjar/i
    );
  });
});
